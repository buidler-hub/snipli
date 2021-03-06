import { Command } from "@oclif/core";

import chalk from "chalk";

import revokeToken from "../lib/revokeToken";
import getToken from "../utils/getToken";

export default class Logout extends Command {
  static description = "📤 Logout from snipli";

  static examples = ["snipli logout"];

  async run() {
    if (getToken() === null) {
      console.log(chalk.yellow("\nYou're not logged in!\n"));
    } else {
      revokeToken();
    }
  }
}
