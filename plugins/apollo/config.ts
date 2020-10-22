export default (ctx: any) => {
  return {
    httpEndpoint: ctx.$config.graphqlEndpoint,
  }
}
