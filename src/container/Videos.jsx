import React from 'react';
import Title from '../components/Title';
import CardVideo from '../components/CardVideo';
import { connect } from 'react-redux';
import '../assets/styles/components/Videos.css'

const Videos = ({ videos = [] }) => {
    return (
        <section className="container-videos">
            <Title 
                title="List of videos uploaded" 
                description="🎥 List of videos uploaded in channel" />

            <div className="container-cards-video">

                { videos.length > 0 && (
                    videos.map( (video) => (
                        <CardVideo 
                            key={video.id}
                            image={video.image}
                            title={video.title}
                            description={video.description}
                        />
                    ))
                )}
            </div>
        </section>
    )
}

const mapStateToProps = state => {
    return {
        videos: state.videos,
    }
};

export default connect(mapStateToProps, null)(Videos);