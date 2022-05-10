const Table = ({universities, selectUniversity}) => {

    return (
            <table className="table table-hover">
                <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Website</th>
                    <th scope="col"></th>
                </tr>
                </thead>
                <tbody>
                {universities.map(({name, web_pages: [url], index}) => (
                    <tr key={index}>
                        <td>{name}</td>
                        <td>
                            <a href={url} target="_blank">{url}</a>
                        </td>
                        <td>
                            <button onClick={() => selectUniversity(name)}>
                                Details
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
    )
};

export default Table