# F*Choir Dot Com
### the 'com' stands for 'complicated'

## README
### What is this document?

- this is a list of stuff we got working
- where we put things we learned so we don't have to learn them again
- a list of shortcuts we took
- a list of stuff that broke along the way that we had to fix
- and of shit we haven't got done yet but need to
- and also things we need to do to keep that stuff working

## Onboarding
### Start here if you're new
- TBD

## Staying alive
### DNS
DNS means Domain Name Servers and it's how computers find each other online. We have our email with Wordpress (`MX` entries and related `TXT` entries in the table below)
and our site with Vercel. 

Wordpress (domain host) should be pointed at Vercel's nameservers `ns1.vercel-dns.com` and `ns2.vercel-dns.com`, and Vercel given the MX and TXT configs to point back to Vercel for mail.

If Vercel DNS breaks for some reason, we've got a working configuration Wordpress configuration to fall back to:
```
A       @                   Handled by WordPress.com
TXT     titan1._domainkey   v=DKIM1; k=rsa; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCGrgDunmjhtIekmHJ0k+/nBYWrZNebIDxmbfIj7f0C/DmjCEmyIlkCgIIYFQp+ixc/Wq4RFR3IOVgzhXFHsEWLbDq6FkXKU5RKckVzIi9wW4K7pvwj+dNT3jptRsU7KhjzygDX5LKHQmFCxsrjHo9RtTLmNn1PrX5CZXP1QWG17wIDAQAB
CNAME   www                 fchoir.com
TXT     _dmarc              v=DMARC1;p=none;sp=none;adkim=r;aspf=r;pct=100
CNAME   *                   fchoir.com
TXT     @                   v=spf1 include:spf.titan.email ~all
MX      @                   mx1.titan.email with priority 10
MX      @                   mx2.titan.email with priority 20
TXT     _domainconnect      public-api.wordpress.com/rest/v1.3/domain-connect
```
with domain forwarding to https://fchoir-number-one-fan.vercel.app/

### Change Log
- 12/12/24: new site live
- 24/01/25: broke DNS changing email servers, 307 redirect to Vercel app DNS
- 22/02/25: restored DNS and removed redirect. Image alt text from Strapi now renders.
- 14/03/25: hidden `/support` page added to be developed FAO funders. Added RichText component to render Strapi rich text blocks nicely.
- 21/03/25: added hardcoded crowdfunder link to frontpage
- 28/03/25: updated About page with current roster and date range. Improve front page image aspect ratio and randomise the initial displayed gallery.
- 11/04/25: added hidden Support page (not linked from elsewhere in the site) and supporting API. 
- 25/04/25: 
  - updated dependencies for both packages.
  - Add motd feature on Strapi and remove the hardcoded crowdfunder link. 
  - Clean up members page so calendar is just a link. Space for more members features.
  - Add the merch API and populate the merch page from it