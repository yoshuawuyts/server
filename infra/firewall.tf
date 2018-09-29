resource "digitalocean_firewall" "web" {
  name = "Web"

  droplet_ids = ["${digitalocean_droplet.web.id}"]

  inbound_rule = [
    {
      # ssh
      protocol           = "tcp"
      port_range         = "22"
      source_addresses   = ["0.0.0.0/0", "::/0"]
    },
    {
      # http
      protocol           = "tcp"
      port_range         = "80"
      source_addresses   = ["0.0.0.0/0", "::/0"]
    },
    {
      # https
      protocol           = "tcp"
      port_range         = "443"
      source_addresses   = ["0.0.0.0/0", "::/0"]
    },
    {
      # email
      protocol           = "icmp"
      source_addresses   = ["0.0.0.0/0", "::/0"]
    },
    {
      # mosh
      protocol           = "udp"
      port_range         = "60000-60010"
      source_addresses   = ["0.0.0.0/0", "::/0"]
    },
  ]

  outbound_rule = [
    # dns
    {
      protocol                = "tcp"
      port_range              = "1-65535"
      destination_addresses   = ["0.0.0.0/0", "::/0"]
    },
    # dns
    {
      protocol                = "udp"
      port_range              = "1-65535"
      destination_addresses   = ["0.0.0.0/0", "::/0"]
    },
    # email
    {
      protocol                = "icmp"
      destination_addresses   = ["0.0.0.0/0", "::/0"]
    },
  ]
}
