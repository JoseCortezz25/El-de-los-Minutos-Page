import React from 'react';
import Title from '../components/Title';
import CardVideo from '../components/CardVideo';
import '../assets/styles/components/Videos.css'

function Videos() {
    return (
        <section className="container-videos">
            <Title 
                title="List of videos uploaded" 
                description="🎥 List of videos uploaded in channel" />

            <div className="container-cards-video">
                
                <CardVideo 
                    image="https://cdn.pixabay.com/photo/2021/06/22/16/39/arch-6356637_960_720.jpg"  
                    title="video 1"  
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas sed est aperiam impedit fugit ea cupiditate, illum rem nam! Vero sapiente ex odit, quidem laborum hic aperiam amet omnis nisi."/>
                
                <CardVideo 
                    image="https://cdn.pixabay.com/photo/2021/04/22/15/46/landscape-6199355_960_720.jpg"  
                    title="video 2"  
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas sed est aperiam impedit fugit ea cupiditate, illum rem nam! Vero sapiente ex odit, quidem laborum hic aperiam amet omnis nisi."/>
                
                <CardVideo 
                    image="https://cdn.pixabay.com/photo/2021/06/22/16/39/arch-6356637_960_720.jpg"  
                    title="video 3"  
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas sed est aperiam impedit fugit ea cupiditate, illum rem nam! Vero sapiente ex odit, quidem laborum hic aperiam amet omnis nisi."/>
                
                <CardVideo 
                    image="https://cdn.pixabay.com/photo/2021/06/22/16/39/arch-6356637_960_720.jpg"  
                    title="video 4"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas sed est aperiam impedit fugit ea cupiditate, illum rem nam! Vero sapiente ex odit, quidem laborum hic aperiam amet omnis nisi."/>
            
            </div>

        </section>
    )
}

export default Videos;