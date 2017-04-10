function use(block) {
  var catchable = {
    catch(catcher) {
      catcher.call(this, error);
      return this;
    },
    
    finally(finisher) {
      finisher.call(this);
    }
  };

	try {
    block();
  } catch (error){
  	this.error = error;
    return catchable;
  }
}

// use(() => {
//   console.log('run');
//   throw 'no!!!!';
// }).catch(error => { console.log('error', error); })
//   .finally(() => { console.log('finally...') });