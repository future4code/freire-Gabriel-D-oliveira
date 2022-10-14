import { ShowDatabase } from "../database/ShowDatabase";
import { AuthenticationError } from "../errors/AuthenticationError";
import { AuthorizationError } from "../errors/AuthorizationError";
import {
  ICreateShowInputDTO,
  ICreateShowOutputDTO,
  IGetShowOutPutDTO,
  IShowDB,
  Show,
} from "../models/Show";
import { USER_ROLES } from "../models/User";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";

export class ShowBusiness {
  constructor(
    private showDatabase: ShowDatabase,
    private idGenerator: IdGenerator,
    private authenticator: Authenticator
  ) {}

  public createShow = async (
    input: ICreateShowInputDTO
  ): Promise<ICreateShowOutputDTO> => {
    const { token, band, starts_at } = input;

    const payload = this.authenticator.getTokenPayload(token);

    if (!payload) {
      throw new AuthenticationError("Token inválido");
    }

    if (payload.role !== USER_ROLES.ADMIN) {
      throw new AuthorizationError(
        "Usuário deve ser Administrador para criar um show"
      )}

    const id = this.idGenerator.generate();

    const show = new Show(id, band, new Date(starts_at));
    await this.showDatabase.createShow(show);

    const response: ICreateShowOutputDTO = {
      message: "Show criado com sucesso",
      show,
    };
    return response;
  };

  public getShows = async (): Promise<IGetShowOutPutDTO> => {
    const showsDB = await this.showDatabase.getShows();
    const shows = showsDB.map((showDB) => {
      return new Show(showDB.id, showDB.band, showDB.starts_at);
    });

    const response: IGetShowOutPutDTO = {
      shows,
    };

    return response;
  };
}
