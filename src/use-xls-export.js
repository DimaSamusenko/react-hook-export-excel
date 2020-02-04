import {useState, useEffect} from 'react';

export function useXlsExport(service, fileName) {
  const [data, setData] = useState(false);

  useEffect(() => {
    const blob = new Blob([data], {
      type: 'application/vnd.ms-excel',
    });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');

    link.style = 'display: none';

    document.body.append(link);

    link.href = url;
    link.download = fileName;
    link.click();
    window.URL.revokeObjectURL(url);
  }, [data]);

  return [data, setData];
}
