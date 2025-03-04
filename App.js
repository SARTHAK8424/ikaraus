

// // // // src/App.jsx
// // // import React, { useState, useEffect } from 'react';
// // // import ModelViewer from './components/ModelViewer';
// // // import SearchBar from './components/SearchBar';
// // // import ModelsList from './components/ModelsList';
// // // import UploadForm from './components/UploadForm';
// // // import { fetchModels } from './services/api';
// // // import './styles.css';

// // // function App() {
// // //   const [models, setModels] = useState([]);
// // //   const [selectedModel, setSelectedModel] = useState(null);
// // //   const [searchTerm, setSearchTerm] = useState('');
// // //   const [loading, setLoading] = useState(false);
// // //   const [error, setError] = useState(null);

// // //   // Load models from API
// // //   const loadModels = async () => {
// // //     try {
// // //       setLoading(true);
// // //       setError(null);
// // //       const data = await fetchModels(searchTerm);
// // //       setModels(data);
      
// // //       // Auto-select first model if none selected
// // //       if (data.length > 0 && !selectedModel) {
// // //         setSelectedModel(data[0]);
// // //       }
      
// // //     } catch (err) {
// // //       setError('Failed to load models: ' + err.message);
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   // Initial load and when search changes
// // //   useEffect(() => {
// // //     loadModels();
// // //   }, [searchTerm]);

// // //   return (
// // //     <div className="app">
// // //       <header>
// // //         <h1>3D Model Viewer</h1>
// // //         <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
// // //       </header>
      
// // //       <main>
// // //         <div className="sidebar">
// // //           <ModelsList 
// // //             models={models} 
// // //             onSelectModel={setSelectedModel} 
// // //             selectedModel={selectedModel}
// // //           />
// // //           <UploadForm onModelUploaded={loadModels} />
// // //         </div>
        
// // //         <div className="viewer-container">
// // //           {selectedModel ? (
// // //             <ModelViewer modelUrl={selectedModel.url} />
// // //           ) : (
// // //             <div className="no-selection">
// // //               Select a model to view
// // //             </div>
// // //           )}
// // //         </div>
// // //       </main>
      
// // //       {loading && <div className="loading-overlay">Loading...</div>}
// // //       {error && <div className="error-message">{error}</div>}
// // //     </div>
// // //   );
// // // }

// // // export default App;  

// // // src/App.jsx
// // import React, { useState, useEffect, useCallback } from 'react';
// // import ModelViewer from './components/ModelViewer';
// // import SearchBar from './components/SearchBar';
// // import ModelsList from './components/ModelsList';
// // import UploadForm from './components/UploadForm';
// // import { fetchModels } from './services/api';
// // import './styles.css';

// // function App() {
// //   const [models, setModels] = useState([]);
// //   const [selectedModel, setSelectedModel] = useState(null);
// //   const [searchTerm, setSearchTerm] = useState('');
// //   const [loading, setLoading] = useState(false);
// //   const [error, setError] = useState(null);

// //   // Load models from API - memoized with useCallback
// //   const loadModels = useCallback(async () => {
// //     try {
// //       setLoading(true);
// //       setError(null);
// //       const data = await fetchModels(searchTerm);
// //       setModels(data);
      
// //       // Auto-select first model if none selected
// //       if (data.length > 0 && !selectedModel) {
// //         setSelectedModel(data[0]);
// //       }
      
// //     } catch (err) {
// //       setError('Failed to load models: ' + err.message);
// //     } finally {
// //       setLoading(false);
// //     }
// //   }, [searchTerm, selectedModel]);

// //   // Initial load and when dependencies change
// //   // useEffect(() => {
// //   //   loadModels();
// //   // }, [loadModels]);
// //   // 
// //   // // Just before the useEffect line:
// // // eslint-disable-next-line react-hooks/exhaustive-deps
// // useEffect(() => {
// //   loadModels();
// // }, [searchTerm]); // Now includes loadModels as dependency

// //   return (
// //     <div className="app">
// //       <header>
// //         <h1>3D Model Viewer</h1>
// //         <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
// //       </header>
      
// //       <main>
// //         <div className="sidebar">
// //           <ModelsList 
// //             models={models} 
// //             onSelectModel={setSelectedModel} 
// //             selectedModel={selectedModel}
// //           />
// //           <UploadForm onModelUploaded={loadModels} />
// //         </div>
        
// //         <div className="viewer-container">
// //           {selectedModel ? (
// //             <ModelViewer modelUrl={selectedModel.url} />
// //           ) : (
// //             <div className="no-selection">
// //               Select a model to view
// //             </div>
// //           )}
// //         </div>
// //       </main>
      
// //       {loading && <div className="loading-overlay">Loading...</div>}
// //       {error && <div className="error-message">{error}</div>}
// //     </div>
// //   );
// // }

// // export default App;


// // src/App.js (or App.jsx)
// import React, { useState, useCallback, useEffect } from 'react';
// import ModelViewer from './components/ModelViewer';
// import SearchBar from './components/SearchBar';
// import ModelsList from './components/ModelsList';
// import UploadForm from './components/UploadForm';
// import { fetchModels } from './services/api';
// import './styles.css';

// function App() {
//   const [models, setModels] = useState([]);
//   const [selectedModel, setSelectedModel] = useState(null);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   // Load models from API using useCallback to memoize the function
//   const loadModels = useCallback(async () => {
//     try {
//       setLoading(true);
//       setError(null);
//       const data = await fetchModels(searchTerm);
//       setModels(data);
      
//       // Auto-select first model if none selected
//       if (data.length > 0 && !selectedModel) {
//         setSelectedModel(data[0]);
//       }
      
//     } catch (err) {
//       setError('Failed to load models: ' + err.message);
//     } finally {
//       setLoading(false);
//     }
//   }, [searchTerm, selectedModel]);

//   // Initial load and when dependencies change
//   // eslint-disable-next-line react-hooks/exhaustive-deps
//   useEffect(() => {
//     loadModels();
//   }, [searchTerm]);

//   return (
//     <div className="app">
//       <header>
//         <h1>3D Model Viewer</h1>
//         <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
//       </header>
      
//       <main>
//         <div className="sidebar">
//           <ModelsList 
//             models={models} 
//             onSelectModel={setSelectedModel} 
//             selectedModel={selectedModel}
//           />
//           <UploadForm onModelUploaded={loadModels} />
//         </div>
        
//         <div className="viewer-container">
//           {selectedModel ? (
//             <ModelViewer modelUrl={selectedModel.url} />
//           ) : (
//             <div className="no-selection">
//               Select a model to view
//             </div>
//           )}
//         </div>
//       </main>
      
//       {loading && <div className="loading-overlay">Loading...</div>}
//       {error && <div className="error-message">{error}</div>}
//     </div>
//   );
// }

// export default App;


// import React, { useState, useCallback, useEffect } from 'react';
// import ModelViewer from './components/ModelViewer';
// import SearchBar from './components/SearchBar';
// import ModelsList from './components/ModelsList';
// import UploadForm from './components/UploadForm';
// import { fetchModels } from './services/api';
// import './styles.css';

// function App() {
//   const [models, setModels] = useState([]);
//   const [selectedModel, setSelectedModel] = useState(null);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   // Load models from API using useCallback to memoize the function
//   const loadModels = useCallback(async () => {
//     try {
//       setLoading(true);
//       setError(null);
//       const data = await fetchModels(searchTerm);
//       setModels(data);
      
//       // Auto-select first model if none selected or if selected model is not in the list
//       if (data.length > 0 && (!selectedModel || !data.includes(selectedModel))) {
//         setSelectedModel(data[0]);
//       }
      
//     } catch (err) {
//       console.error('Error loading models:', err);
//       setError('Failed to load models: ' + err.message);
//     } finally {
//       setLoading(false);
//     }
//   }, [searchTerm]); // Removed selectedModel from dependencies to avoid infinite re-renders

//   // Initial load and when searchTerm changes
//   useEffect(() => {
//     loadModels();
//   }, [searchTerm, loadModels]);

//   return (
//     <div className="app">
//       <header>
//         <h1>3D Model Viewer</h1>
//         <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
//       </header>
      
//       <main>
//         <div className="sidebar">
//           <ModelsList 
//             models={models} 
//             onSelectModel={setSelectedModel} 
//             selectedModel={selectedModel}
//           />
//           <UploadForm onModelUploaded={loadModels} />
//         </div>
        
//         <div className="viewer-container">
//           {selectedModel ? (
//             <ModelViewer modelUrl={selectedModel.url} />
//           ) : (
//             <div className="no-selection">
//               Select a model to view
//             </div>
//           )}
//         </div>
//       </main>
      
//       {loading && <div className="loading-overlay">Loading...</div>}
//       {error && <div className="error-message">{error}</div>}
//     </div>
//   );
// }

// export default App;

import React, { useState, useCallback, useEffect } from 'react';
import ModelViewer from './components/ModelViewer';
import SearchBar from './components/SearchBar';
import ModelsList from './components/ModelsList';
import UploadForm from './components/UploadForm';
import { fetchModels } from './services/api';
import './styles.css';

function App() {
  const [models, setModels] = useState([]);
  const [selectedModel, setSelectedModel] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Load models from API
  const loadModels = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchModels(searchTerm);
      setModels(data);
      
      // Auto-select first model if none selected or if selected model is not in the list
      if (data.length > 0 && (!selectedModel || !data.find(model => model.id === selectedModel?.id))) {
        setSelectedModel(data[0]);
      }
      
    } catch (err) {
      console.error('Error loading models:', err);
      setError('Failed to load models: ' + err.message);
    } finally {
      setLoading(false);
    }
  }, [searchTerm, selectedModel]); // Include selectedModel in dependencies

  // Initial load and when searchTerm changes
  useEffect(() => {
    loadModels();
  }, [searchTerm, loadModels]);

  // Handle search term changes
  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  // Handle model selection
  const handleSelectModel = (model) => {
    setSelectedModel(model);
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>3D Model Viewer</h1>
      </header>
      
      <div className="app-content">
        <div className="sidebar">
          <SearchBar onSearch={handleSearch} />
          <ModelsList 
            models={models} 
            selectedModel={selectedModel} 
            onSelectModel={handleSelectModel} 
          />
          <UploadForm onModelUploaded={loadModels} />
        </div>
        
        <div className="viewer-container">
          {selectedModel ? (
            <ModelViewer model={selectedModel} />
          ) : (
            <div className="empty-state">
              Select a model to view
            </div>
          )}
        </div>
      </div>
      
      <div className="status-bar">
        {loading && <div className="loading-indicator">Loading...</div>}
        {error && <div className="error-message">{error}</div>}
      </div>
    </div>
  );
}

export default App;