import colors from "@colors/colors";

export default class Logging {
  public static log = (args: any) => this.info(args);

  public static success = (...args: any) =>
    console.log(
      colors.grey(`[${new Date().toLocaleString()}]`),
      colors.brightGreen(" [SUCCESS]"),
      colors.green(args)
    );

  public static info = (...args: any) =>
    console.log(
      colors.grey(`[${new Date().toLocaleString()}]`),
      colors.brightCyan(" [INFO]"),
      colors.cyan(args)
    );

  public static warn = (...args: any) =>
    console.log(
      colors.grey(`[${new Date().toLocaleString()}]`),
      colors.brightYellow(" [WARN]"),
      colors.yellow(args)
    );

  public static error = (...args: any) =>
    console.log(
      colors.red(`[${new Date().toLocaleString()}]`),
      colors.brightRed(" [ERROR]"),
      colors.red(args)
    );
}
