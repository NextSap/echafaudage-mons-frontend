import React from 'react';

const Consult = ({ params }: { params: { id: string } }) => {
    return (
        <div>
            {params.id}
        </div>
    );
};

export default Consult;