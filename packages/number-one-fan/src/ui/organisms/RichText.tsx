import { FC, Fragment } from 'react';
import { JSX } from 'react/jsx-runtime';
import IntrinsicElements = JSX.IntrinsicElements;
import { randomUUID } from 'node:crypto';

interface RichTextNode {
  type: string;
  children: TextNode[];
  format?: 'ordered' | 'unordered';
  headingLevel?: number;
}

interface TextNode {
  text: string;
  type: string;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  strikethrough?: boolean;
  code?: boolean;
  url?: string;
  children?: TextNode[];
}

const nodeKey = (text: string) => `${text}-${Math.floor(1024 * Math.random())}`;

export const RichText: FC<{ richText: RichTextNode[] }> = ({ richText }) => {
  const renderTextNode = (node: TextNode) => {
    if (node.type === 'link' && node.url && node.children) {
      return (
        <a href={node.url} key={nodeKey(node.text)}>
          {node.children.map((child, i) => renderTextNode(child))}
        </a>
      );
    }

    if (node.bold || node.italic || node.underline || node.strikethrough) {
      const classNames = [
        node.bold ? 'font-bold' : '',
        node.italic ? 'italic' : '',
        node.underline ? 'underline' : '',
        node.strikethrough ? 'line-through' : '',
      ]
        .filter(Boolean)
        .join(' ');

      return (
        <span className={classNames} key={nodeKey(node.text)}>
          {node.text}
        </span>
      );
    }
    if (node.code) {
      return <code key={nodeKey(node.text)}>{node.text}</code>;
    }
    return node.text;
  };

  const renderRichTextNode = (node: RichTextNode) => {
    switch (node.type) {
      case 'heading': {
        const level = node.headingLevel || 2;
        const HeadingTag = `h${level}` as keyof IntrinsicElements;

        const headingClasses = [
          'text-4xl font-bold mb-4',
          'text-3xl font-bold mb-3',
          'text-2xl font-bold mb-2',
          'text-xl font-bold mb-2',
          'text-lg font-bold mb-1',
          'text-base font-bold mb-1',
        ];

        return (
          <HeadingTag className={headingClasses[level]} key={nodeKey(node.children[0].text)}>
            {node.children.map((child, i) => (
              <Fragment key={nodeKey(child.text)}>{renderTextNode(child)}</Fragment>
            ))}
          </HeadingTag>
        );
      }
      case 'paragraph':
        return (
          <p key={randomUUID()}>
            {node.children.map((child, i) => (
              <Fragment key={nodeKey(child.text)}>{renderTextNode(child)}</Fragment>
            ))}
          </p>
        );

      case 'list':
        const ListTag = node.format === 'ordered' ? 'ol' : 'ul';
        const listClasses =
          node.format === 'ordered'
            ? 'list-decimal pl-5 mb-4 space-y-1'
            : 'list-disc pl-5 mb-4 space-y-1';
        return (
          <ListTag className={listClasses}>
            {node.children.map((item) => (
              <li key={nodeKey(item.text)}>
                {item.children?.map((child) => (
                  <Fragment key={nodeKey(child.text)}>{renderTextNode(child)}</Fragment>
                ))}
              </li>
            ))}
          </ListTag>
        );
      default:
        return null;
    }
  };

  return (
    <div className="rich-content">
      <div className="rich-text">
        {richText.map((node: RichTextNode, index: number) => renderRichTextNode(node))}
      </div>
    </div>
  );
};
