/* global document,CustomEvent,window,Blob */
import {useState, useEffect} from 'react';

const initConfig = {
    fileName: `export-${Date.now()}.xlsx`,
};

export function useXlsExport(config = initConfig) {
    const [data, setData] = useState();

    useEffect(() => {
        if (!data) {
            return;
        }

        const blob = new Blob([data], {
            type: 'application/vnd.ms-excel',
        });
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');

        link.style = 'display: none';

        document.body.append(link);

        link.href = url;
        link.download = config.fileName;
        link.click();
        window.URL.revokeObjectURL(url);
    }, [data]);

    return [data, setData];
}
