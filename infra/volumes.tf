resource "digitalocean_volume" "persistent" {
  region                  = "ams3"
  name                    = "persistent"
  size                    = 10
  initial_filesystem_type = "xfs"
  description             = "persistent volume"
}
