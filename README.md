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
DNS means Domain Name Servers and it's how computers find each other online. We have our email with Wordpress (`MX` entries in the table below)
and our site with Vercel. It's easy to get the wrong setting and break things, so we've got a working configuration here to fall back to:
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