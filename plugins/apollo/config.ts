export default (ctx: any) => {
  return {
    httpEndpoint: ctx.$config.graphqlEndpoint,
    httpLinkOptions: {
      uri: ctx.$config.graphqlEndpoint,
      headers: {
        'x-tenant-id': 'neu',
        // TODO --> Replace your local token
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InN0dWRlbnRAbmV1LmVkdS52biIsInN1YiI6IjVmYTM4NDBkMDE3MTYwM2QzMTBjODA2ZSIsInJvbGVzIjpbIlNUVURFTlQiXSwidGVuYW50SWQiOiJuZXUiLCJpYXQiOjE2MDQ1NjM1NjcsImV4cCI6MTYwNzE1NTU2N30.Pwv83uvoztmVob4hPpGNOBut-NXipvvnkCIVoqAFoI0',
      },
    },
  }
}
