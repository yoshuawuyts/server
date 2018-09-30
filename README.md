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
```

## Stats
Stats can be read from `chronograf` on `https://stats.yoshuawuyts.com`. To
set it up, follow the instructions on:

- https://docs.influxdata.com/chronograf/v1.3/administration/security-best-practices/#chronograf-with-oauth-2-0-authentication

## License
[MIT](./LICENSE-MIT) OR [Apache-2.0](./LICENSE-APACHE)
