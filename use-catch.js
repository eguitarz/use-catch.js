function use(block) {
  var catchable = {
    catch(catcher) {
      catcher.call(this, error);
      this.error = null;
      return this;
    },
    
    finally(finisher) {
      finisher.call(this);
      if (this.error) {
        throw this.error;
      }
    }
  };

	try {
    block();
  } catch (error){
  	catchable.error = error;
    return catchable;
  }
}

// use(() => {
//   console.log('run');
//   throw 'no!!!!';
// }).catch(error => { console.log('error', error); })
//   .finally(() => { console.log('finally...') });