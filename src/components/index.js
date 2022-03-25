import React from 'react';
import { artistInfo, artistPage } from './artist';
import { songInfo, albumInfo } from './album';

class artistClass extends React.Component {
    render() {
        return (<div>
                    <artistInfo name={this.props.name}>
                        <artistPage imgURL={this.props.img} externalURL={this.props.link}/>
                    </artistInfo>
                    <button>Select</button>
                </div>)
    }
}

class songClass extends React.Component {
    render() {
        return (
            <albumInfo album={this.props.album}>
                <songInfo title={this.props.title}/>
            </albumInfo>
        )
    }
}

export {artistClass, songClass};