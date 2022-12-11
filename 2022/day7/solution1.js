// Day 6

// Solution 1

const fs = require("fs");
const path = require("path");
let input = fs.readFileSync(path.resolve(__dirname, "./input.txt"), {
  encoding: "utf-8",
});


const actionTypes = {
  CHANGE_OUT: 'CHANGE_OUT',
  CHANGE_ADD: 'CHANGE_ADD',
  CHANGE_ROOT: 'CHANGE_ROOT',
  DIR: 'DIR',
  FILE: 'FILE',
}

const getActionType = (line) => {
  switch (line[0]) {
    case '$':
      return (line.slice(-1) === '.') ? actionTypes.CHANGE_OUT 
        : (line.slice(-1) === '/') ? actionTypes.CHANGE_ROOT 
        : line !== '$ ls' ? actionTypes.CHANGE_ADD : null;
    default: 
      return /^\d/.test(line) ? actionTypes.FILE : actionTypes.DIR;
  }
}

const getAction = (line) => {
  const type = getActionType(line)
  if (!type) return null;

  let res = {}
  const [size, name] = line.replace('$ ', '').split(' ')
  switch (type) {
    case actionTypes.CHANGE_ADD:
    case actionTypes.DIR:
      res = { name }
      break
    case actionTypes.FILE:
      res = { name, size }
      break
  }
  return { type, ...res}
}

const setPath = (object, path, value, arr) => path
   .reduce((o,p,i) => {
    if (path.length === ++i) {
      return o[p] = arr ? { ...o[p], files: [...(o[p].files || []), value]} : value
    } else {
      return o[p] = o[p] || {};
    }
  }, object);

const updateFileSystem = (action, fileSystem, currentPath) => {
  switch (action.type) {
    case actionTypes.CHANGE_ROOT: 
      currentPath.length = 0;
      currentPath.push('/')
      break
    case actionTypes.CHANGE_OUT:
      currentPath.pop()
      break
    case actionTypes.CHANGE_ADD:
      currentPath.push(action.name)
      setPath(fileSystem, currentPath, {})
      break
    case actionTypes.DIR:
      setPath(fileSystem, [...currentPath, action.name], {})
      break
    case actionTypes.FILE:
      setPath(fileSystem, currentPath, { name: action.name, size: action.size }, arr = true)
      break
  };
}

const getDirectorySize = (directory) => {
  return Object.keys(directory).reduce((acc, key) => {
    if (key === 'files') {
      return acc + directory[key].reduce((acc, file) => acc + +file.size, 0)
    } else {
      return acc + getDirectorySize(directory[key])
    }
  }, 0)
}

const getDirectoriesSizes = (fileSystem) => {
  const sizes = []
  Object.keys(fileSystem).forEach(key => {
    const dir = fileSystem[key]
    key !== 'files' && sizes.push({name: key, size: getDirectorySize(dir)}, ...getDirectoriesSizes(dir));
  });
  return sizes;
};

const buildFileSystem = (input) => {
  const fileSystem = {}
  const currentPath = []
  input.forEach(line => {
    const action = getAction(line)
    action && updateFileSystem(action, fileSystem, currentPath)
  })
  return fileSystem;
}



const solution = (input) => {
  const fileSystem = buildFileSystem(input) 
  const sizes = getDirectoriesSizes(fileSystem)

  return sizes.filter(({ size}) => size < 100000).reduce((acc, { size }) => acc + size, 0)
};

console.log(solution(input.split("\r\n")));
