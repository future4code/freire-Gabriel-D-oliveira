import { PostBusiness } from "../src/business/PostBusiness";
import { posts } from "../src/database/migrations/data";
import {
  ICreatePostInputDTO,
  IGetPostsInputDTO,
  IPostDB,
} from "../src/models/Post";
import { AuthenticatorMock } from "./mocks/AuthenticatorMock";
import { IdGeneratorMock } from "./mocks/IdGeneratorMock";
import { PostDatabaseMock } from "./mocks/PostDatabaseMock";

describe("Testando PostBusiness", () => {
  const postBusiness = new PostBusiness(
    new PostDatabaseMock(),
    new IdGeneratorMock(),
    new AuthenticatorMock()
  );

  test("Successfully created post", async () => {
    const input: ICreatePostInputDTO = {
      token: "token-mock-normal",
      content: "Together we stand divide me fall",
    };

    const result = await postBusiness.createPost(input);
    expect(result.message).toBe("Post criado com sucesso");
    expect(result.post.getContent()).toBe("Together we stand divide me fall");
  });

  test("Successfully get post", async () => {
    const input: IGetPostsInputDTO = {
      token: "token-mock-normal",
    };

    const results = await postBusiness.getPosts(input);

    for (let p of results.posts) {
      return { content: p.getContent(), id: p.getId(), user_id: p.getUserId() };
    }
    expect(results).toBe(posts);
  });
});
