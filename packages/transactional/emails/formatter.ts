const BROWSER_REGEX: RegExp =
  /(Chrome|Firefox|Safari|Opera|MSIE|Trident|Edge)\/?([0-9.]*)/;

export const formattedDevice = (device: string): string =>
  `${device.match(BROWSER_REGEX)?.[1] || "Unknown Browser"} on ${
    device
      .match(/\(([^)]+)\)/)?.[1]
      .split(";")
      .map((c) => c.trim())
      .filter((c) => /Windows NT|Mac OS X|Linux/.test(c))
      .join(" ") || device
  }`;

export const formattedDate = (date: Date): string =>
  new Intl.DateTimeFormat("en-US", {
    dateStyle: "long",
    timeStyle: "short",
  }).format(date);
