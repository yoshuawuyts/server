variable ssh_fingerprint {}
variable pub_key {}
variable pvt_key {}

resource "digitalocean_droplet" "debian-s-1vcpu-1gb-ams3-01" {
  image = "debian-9-5-x64"
  name = "debian-s-1vcpu-1gb-ams3-01"
  region = "ams3"
  size = "1gb"
  private_networking = true
  monitoring = true
  backups = true
  ipv6 = true

  ssh_keys = [
    "${var.ssh_fingerprint}"
  ]

  connection {
    user = "root"
    type = "ssh"
    private_key = "${file(var.pvt_key)}"
    timeout = "2m"
  }

  provisioner "remote-exec" {
    inline = [
      "export PATH=$PATH:/usr/bin",
      "sudo apt-get update",
      "sudo apt-get -y install nginx"
    ]
  }
}
