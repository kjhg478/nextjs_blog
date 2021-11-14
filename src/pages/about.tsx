import React from 'react'
import Layout from '../components/Layout';

interface AboutProps {

}

const About: React.FC<AboutProps> = () => {
    return (
        <Layout pageTitle="About">
        <h1>About Us</h1>
        <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat debitis libero deleniti recusandae consequatur quos totam veniam voluptatum amet hic et voluptatem asperiores, ullam molestiae explicabo quisquam delectus provident distinctio?
        </p>
    </Layout>
    )
}

export default About;