# server
Server configuration files.

## Secrets
Create a `terraform.tfvars` file in the root dir, and populate it with the
`digital ocean` key. A tutorial on how to do this can be found here:

- [How to use terraform with DigitalOcean](https://www.digitalocean.com/community/tutorials/how-to-use-terraform-with-digitalocean)
- [Generate a new token](https://cloud.digitalocean.com/account/api)

```tf
variable "do_token" {}
variable "pub_key" {}
variable "pvt_key" {}
variable "ssh_fingerprint" {}
```

## License
[MIT](./LICENSE-MIT) OR [Apache-2.0](./LICENSE-APACHE)
