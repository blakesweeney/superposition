import React from "react";
// import pv from 'bio_pv';
import Form from "./pages/main/form";
import Viewer from "./pages/main/viewer";

export default class Application extends React.Component {
    render() {
      let viewer = null;
        // let viewer = pv.Viewer(document.getElementById(this.props.data.viewer.id),
        //                        this.props.data.viewer.options);
        return (
            <div className='row'>
                <div className='col-md-6'>
                    <Form />
                </div>

                <div className='col-md-6'>
                    <Viewer viewer={viewer} />
                </div>
            </div>
        );
    }
};
