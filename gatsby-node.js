exports.createResolvers = ({ createResolvers }) => {
  createResolvers({
    Query: {
      helloAll: {
        type: `[String]`,
        resolve: (source, args, context, info) => {
          // This should add a page dependency but it does not
          const things = context.nodeModel.getAllNodes(
            { type: `ThingYaml` },
            { connectionType: `ThingYaml` }
          )
          // this does:
          // const things = context.nodeModel.getAllNodes(
          //   { type: `ThingYaml` },
          //   { connectionType: `ThingYaml`, path: context.path }
          // )
          // and so does this:
          // context.nodeModel.trackPageDependencies(things, {
          //   connectionType: `ThingYaml`,
          // })
          return things.map(t => `Hello ${t.name}!!`)
        },
      },
    },
  })
}
