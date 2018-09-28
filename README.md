# server
Server configuration files.

## Secrets
Create a `terraform.tfvars` file in the root dir, and populate it with the
`digital ocean` key. A tutorial on how to do this can be found here:

- [How to use terraform with DigitalOcean](https://www.digitalocean.com/community/tutorials/how-to-use-terraform-with-digitalocean)
- [Generate a new token](https://cloud.digitalocean.com/account/api)

```tf
do_token = "{token}"
pub_key = "~/.ssh/digital_ocean.pub"
pvt_key = "~/.ssh/digital_ocean"
ssh_fingerprint = "{00:00:00:00:00:00:00:00}"
```

## License
[MIT](./LICENSE-MIT) OR [Apache-2.0](./LICENSE-APACHE)
