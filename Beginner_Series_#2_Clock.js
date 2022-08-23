function past(h, m, s){
    if (h === 23 && m === 59 && s ===59){
      return 0;
    }
    const res = ((h*60*60)+(m*60)+s)*1000;
    return res;
}

