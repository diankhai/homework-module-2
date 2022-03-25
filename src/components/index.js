import React from 'react';
import { Info, Page } from './artist';
import { SongInfo, AlbumInfo } from './album';

class Artist extends React.Component {
    render() {
        return (<div>
                    <Info name={this.props.name} imgURL={this.props.img} externalURL={this.props.link}>
                    </Info>
                    <button>Select</button>
                </div>)
    }
}

class Song extends React.Component {
    render() {
        return (
            <AlbumInfo album={this.props.album}>
                <SongInfo title={this.props.title}/>
            </AlbumInfo>
        )
    }
}

export {Artist, Song};