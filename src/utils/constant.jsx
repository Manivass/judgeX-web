export const BASE_URL = "http://localhost:7777";

export const map = {
  "01": "Jan",
  "02": "Feb",
  "03": "Mar",
  "04": "Apr",
  "05": "May",
  "06": "Jun",
  "07": "July",
  "08": "Aug",
  "09": "Sep",
  10: "Oct",
  11: "Nov",
  12: "Dec",
};

export const boilerplates = {
  java: `public class Main {
    public static void main(String[] args) {
        // enter the code here 
    }
}`,

  javascript: `function solve() {
  // enter the code here
}

solve();`,

  python: `def solve():
    # enter the code here
    pass

solve()`,

  c: `#include <stdio.h>

int main() {
    // enter the code here

    return 0;
}`,
};

export const languageId = {
  JavaScript: 63,
  Python: 71,
  "C++": 54,
  Java: 62,
  C: 50,
  "C#": 51,
  Go: 60,
  Rust: 73,
  TypeScript: 74,
  PHP: 68,
  Ruby: 72,
};

export const getTimeAgo = (createdAt) => {
  const now = new Date();
  const created = new Date(createdAt);

  const diff = Math.floor((now.getTime() - created.getTime()) / 1000);

  if (diff < 60) {
    return `${diff} sec ago`;
  }

  if (diff < 3600) {
    return `${Math.floor(diff / 60)} min ago`;
  }

  if (diff < 86400) {
    return `${Math.floor(diff / 3600)} hour ago`;
  }

  if (diff < 172800) {
    return "Yesterday";
  }

  return `${Math.floor(diff / 86400)} days ago`;
};
