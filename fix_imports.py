import pathlib

p = pathlib.Path('src/App.jsx')
s = p.read_text()

old = """import { useRef } from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
"""
new = """import { useRef } from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
"""
assert old in s, 'old block not found'
s = s.replace(old, new)
s = s.replace("import './App.css'", "import './App.css'")

p.write_text(s)
print('Fixed imports')
