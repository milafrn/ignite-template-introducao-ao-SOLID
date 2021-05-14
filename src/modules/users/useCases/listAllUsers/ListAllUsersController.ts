import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    const user_id = String(request.headers.user_id);
    if (!user_id) {
      return response
        .status(400)
        .json({ message: "you need input in header user_id" });
    }
    const allUsers = this.listAllUsersUseCase.execute({ user_id });

    return response.status(200).json(allUsers);
  }
}

export { ListAllUsersController };
