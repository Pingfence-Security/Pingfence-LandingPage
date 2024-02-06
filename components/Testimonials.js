import React from 'react';

const Testimonials = () => {
    const testimonial = {
        quote: "Join us in our mission to create the most impeccable technological solutions! We're on the lookout for innovative minds, trailblazers who dare to push boundaries, and tech enthusiasts ready to shape the future of cybersecurity.",
        author: "Person xyz"
    };

    const circleSize = testimonial.author.length * 4;

    return (
        <div id="testimonials" className="relative">
            <div className="flex items-center">
                <div className="border-l-4 border-limegreen h-40 mx-8 pl-4"></div>
                <div className="ml-8 flex-grow">
                    <h1 className="text-xl mb-4">
                        <span className="font-bold">"</span>
                        {testimonial.quote}
                    </h1>
                    <div className="flex items-center justify-end">
                        <h2 className="text-right flex-grow">{testimonial.author}</h2>
                        <div className="w-16 h-16 bg-gray-300 rounded-full ml-4" style={{ width: circleSize, height: circleSize }}></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
