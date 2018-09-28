resource "digitalocean_domain" "default" {
 name = "yoshuawuyts.com"
 ip_address = "${digitalocean_droplet.debian-s-1vcpu-1gb-ams3-01.ipv4_address}"
}

resource "digitalocean_record" "CNAME-www" {
  domain = "${digitalocean_domain.default.name}"
  type = "CNAME"
  name = "www"
  value = "@"
}
