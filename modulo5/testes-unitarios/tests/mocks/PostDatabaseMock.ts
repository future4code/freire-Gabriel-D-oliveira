import { BaseDatabase } from "../../src/database/BaseDatabase";
import { IPostDB, Post, ILikeDB } from "../../src/models/Post";
import { posts } from "../../src/database/migrations/data";

export class PostDatabaseMock extends BaseDatabase {
  public static TABLE_POSTS = "Labook_Posts";
  public static TABLE_LIKES = "Labook_Likes";

  public toPostDBModel = (post: Post): IPostDB => {
    const postDB: IPostDB = {
      id: post.getId(),
      content: post.getContent(),
      user_id: post.getUserId(),
    };

    return postDB;
  };

  public createPost = async (post: Post): Promise<void> => {};

  public getPosts = async (): Promise<IPostDB[]> => {
    // const postsDB: IPostDB[] = await BaseDatabase
    //     .connection(PostDatabase.TABLE_POSTS)
    //     .select()

    // return postsDB

    const postsDB: IPostDB[] = posts;

    return postsDB;
  };

  public getLikes = async (postId: string): Promise<number> => {
    // const result: any = await BaseDatabase
    //     .connection(PostDatabase.TABLE_LIKES)
    //     .select()
    //     .count("id AS likes")
    //     .where({ post_id: postId })

    // return result[0].likes as number
    return 1;
  };

  public findPostById = async (
    postId: string
  ): Promise<IPostDB | undefined> => {
    switch (postId) {
      case "202":
        const post1: IPostDB = {
          id: "202",
          content: "Bom dia, família",
          user_id: "idMock",
        };
        return post1;

      case "203":
        const post2: IPostDB = {
          id: "203",
          content: "Receba",
          user_id: "idMock",
        };

      default:
        return undefined;
    }
  };

  public deletePost = async (postId: string): Promise<void> => {};

  public findLike = async (
    postId: string,
    userId: string
  ): Promise<ILikeDB | undefined> => {
    // const likesDB: ILikeDB[] = await BaseDatabase
    //     .connection(PostDatabase.TABLE_LIKES)
    //     .select()
    //     .where({ post_id: postId })
    //     .andWhere({ user_id: userId })
    // return likesDB[0]
    if (postId === "201" && userId === "idMock") {
      return { id: "1", post_id: "201", user_id: "idMock" };
    }
  };

  public addLike = async (likeDB: ILikeDB): Promise<void> => {};

  public removeLike = async (
    postId: string,
    userId: string
  ): Promise<void> => {};
}
