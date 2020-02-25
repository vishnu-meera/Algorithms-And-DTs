const string = "/a/./b/../../c/";

const simplyFyPath = path => {
  const routes = path.split("/");
  const stack = [];
  for (const route of routes) {
    if (!route || route === ".") continue;
    else if (route === "..") {
      if (stack) stack.pop();
    } else stack.push(route);
  }
  return "/" + stack.join("/");
};

console.log(simplyFyPath(string));
