import React from 'react';

const Modify = ({ params }: { params: { id: string } }) => {
    return (
        <div>
            {params.id}
        </div>
    );
};

export default Modify;