resource "digitalocean_domain" "default" {
  name = "yoshuawuyts.com"
  ip_address = "${digitalocean_droplet.web.ipv4_address}"
}

resource "digitalocean_record" "A-stats" {
  domain = "${digitalocean_domain.default.name}"
  type = "A"
  name = "stats"
  value = "${digitalocean_droplet.web.ipv4_address}"
  ttl = 3600
}

resource "digitalocean_record" "CNAME-www" {
  domain = "${digitalocean_domain.default.name}"
  type = "CNAME"
  name = "www"
  value = "@"
  ttl = 3600
}

resource "digitalocean_record" "CNAME-datrs" {
  domain = "${digitalocean_domain.default.name}"
  type = "CNAME"
  name = "datrs"
  value = "datrs.netlify.com."
  ttl = 3600
}
