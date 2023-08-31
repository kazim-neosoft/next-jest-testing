import { rest } from "msw";
export const handlers = [
  rest.get("http://localhost:7899/tasks", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          id: "1",
          text: "buy milk with some orange cke",
          isDone: false,
        },
        {
          id: "2",
          text: "buy a bread and butter with milk",
          isDone: false,
        },
        {
          id: "3",
          text: "buy vegetables for what",
          isDone: true,
        },
        // {
        //   id: "9bafb4ab-fcf3-492b-8286-446d4146bddb",
        //   text: "test1",
        //   isDone: true,
        // },
      ])
    );
  }),
];
