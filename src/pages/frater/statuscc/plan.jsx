import React, { useState, useEffect } from 'react';
import { GoogleSpreadsheet } from 'google-spreadsheet';

const SPREADSHEET_ID = '1qi_StdA9fuRfR1HqmCKcSu59qNlve7mQdJRaTAa1klU'; // Your spreadsheet ID

const PlanPage = () => {
  const [sheetData, setSheetData] = useState([]);

  useEffect(() => {
    const loadSheetData = async () => {
      try {
        const doc = new GoogleSpreadsheet(SPREADSHEET_ID);

        // Load directly with credentials
        await doc.useServiceAccountAuth({
          client_email: import.meta.env.VITE_GOOGLE_EMAIL,
          private_key: import.meta.env.VITE_GOOGLE_API_KEY.replace(/\\n/g, '\n'),
        });

        await doc.loadInfo();

        const sheet = doc.sheetsByIndex[0];

        const rows = await sheet.getRows();

        setSheetData(rows.map(row => row._rawData));
      } catch (error) {
        console.error('Erro ao carregar dados da planilha:', error);
      }
    };

    loadSheetData();
  }, []);

  return (
    <div>
      <h1>Dados da Planilha</h1>
      <ul>
        {sheetData.map((rowData, index) => (
          <li key={index}>{rowData.join(', ')}</li>
        ))}
      </ul>
    </div>
  );
};

export default PlanPage;
