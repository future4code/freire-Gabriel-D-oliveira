export class HashManagerMock {
  public hash = async (plaintext: string): Promise<string> => {
    if (plaintext === "password") {
      return "hashPassword";
    } else {
      return "hashMock";
    }
  };

  public compare = async (
    plaintext: string,
    hash: string
  ): Promise<boolean> => {
    if (plaintext === "password" && hash === "hashPassword") {
      return true;
    } else {
      return false;
    }
  };
}
