export default async function Blog1({ params }) {
    // Destructure the dynamic parameter
    console.log(await params);

    const { rendom } = await params

    return (
        <div>
            <h1>Blog Page</h1>
            <p>{rendom}</p>
        </div>
    );
}
