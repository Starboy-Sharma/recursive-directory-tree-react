// @ts-nocheck
import {
  ChevronRightIcon,
  DocumentIcon,
  FolderIcon,
} from '@heroicons/react/16/solid';
import { PropTypes } from 'prop-types';
import './App.css';
import { useState } from 'react';

function App() {
  let folders = {
    name: 'Home',
    folders: [
      {
        name: 'Movies',
        folders: [
          {
            name: 'Horror Movies',
            folders: [
              {
                name: 'Horror 1',
                folders: [
                  {
                    name: 'Annabell',
                  },
                ],
              },
              {
                name: 'Horror 2',
                folders: [
                  {
                    name: 'Conan the Barbarian',
                  },
                ],
              },
            ],
          },
          {
            name: 'Action Movies',
            folders: [
              {
                name: 'Action 1',
                folders: [],
              },
              {
                name: 'Action 2',
                folders: [],
              },
            ],
          },
        ],
      },
      {
        name: 'Music',
        folders: [
          {
            name: 'Rock',
            folders: [],
          },
          {
            name: 'Jazz',
            folders: [],
          },
        ],
      },
      {
        name: 'Pictures',
        folders: [],
      },
      {
        name: 'password.txt',
      },
    ],
  };

  return (
    <div className="container max-w-sm mx-auto flex items-center justify-center pt-4">
      <div>
        <ul className="pl-6">
          <Folder folder={folders} />
        </ul>
      </div>
    </div>
  );
}

function Folder({ folder }) {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <li className="my-1.5">
      <span className="flex items-center gap-1.5">
        {folder.folders?.length > 0 && (
          <button onClick={() => setIsOpen(!isOpen)}>
            <ChevronRightIcon
              className={`size-4 text-gray-600 ${isOpen ? 'rotate-90' : ''}`}
            />
          </button>
        )}

        {folder.folders ? (
          <FolderIcon className="size-6 text-sky-500" />
        ) : (
          <DocumentIcon className="size-6 gray-sky-500" />
        )}
        {folder.name}
      </span>

      {isOpen &&
        folder.folders?.map((folder) => (
          <ul className="pl-6" key={folder.name}>
            <Folder folder={folder} key={folder.name} />
          </ul>
        ))}
    </li>
  );
}

Folder.propTypes = {
  folder: PropTypes.object,
};

export default App;
