const throttle = (func, interval) => {
    let lastExecTime = 0;
    let timeoutId;
  
    return function (...args) {
      const context = this;
      const currentTime = new Date().getTime();
  
      if (currentTime - lastExecTime >= interval) {
        func.apply(context, args);
        lastExecTime = currentTime;
      } else {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          func.apply(context, args);
          lastExecTime = currentTime;
        }, interval - (currentTime - lastExecTime));
      }
    };
  };