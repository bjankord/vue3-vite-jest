export default {
  name: 'Button',
  props: {
    msg: {
      type: String,
      required: true
    }
  },
  setup() {
    function log() {
      console.log('clicked')
    }

    function unused() {
      console.log('this should show up as not being covered in test coverage')
    }

    return {
      log,
      unused,
    };
  }
};