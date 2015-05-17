import React from "react";

export default class Form extends React.Component {
  render() {
    return (
        <form>

          <div className='form-group'>
            <label htmlFor='loop-input-1'>Loop Id</label>
            <input type='text' className='form-control' id='loop-input-1'
              defaultValue='IL_1S72_001' />
          </div>

          <div className='form-group'>
            <label htmlFor='loop-input-2'>Loop Id</label>
            <input type='text' className='form-control' id='loop-input-2'
              defaultValue='IL_1S72_001' />
          </div>

          <button type='button' className='btn btn-primary' id='display-btn'>
            Display
          </button>
        </form>
      );
  }

}
