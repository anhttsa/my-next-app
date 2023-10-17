'use client'
import Link from 'next/link'
import useSWR from 'swr'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { IBlog } from '../types/backend'
import AppDialog from '@/components/app.dialog';
import { useState } from 'react';

export default function Home() {
  const fetcher = (url: string) => fetch(url).then(res => res.json())
  const { data, isLoading } = useSWR('http://localhost:8000/blogs', fetcher)

  const [showDialog, setShowDialog] = useState<boolean>(false)

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <div style={{ display: 'flex', gap: 10, margin: '10px 0' }}>
        <Link href={'/facebook'}>
          <Button variant="contained" size="small" color="secondary">
            Facebook
          </Button>
        </Link>
        <Link href={'/youtube'}>
          <Button variant="contained" size="small" color="secondary">
            Youtube
          </Button>
        </Link>
        <Link href={'/tiktok'}>
          <Button variant="contained" size="small" color="secondary">
            Tiktok
          </Button>
        </Link>
      </div>
      <div>
        <div></div>
        <AppDialog showDialog={showDialog} setShowDialog={setShowDialog} />
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>No</TableCell>
              <TableCell align="center">Title</TableCell>
              <TableCell align="center">Content</TableCell>
              <TableCell align="center">Author</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row: IBlog) => (
              <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell align="left">{row.title}</TableCell>
                <TableCell align="left">{row.content}</TableCell>
                <TableCell align="left">{row.author}</TableCell>
                <TableCell align="left">
                  <div style={{ display: 'flex', gap: 10 }}>
                    <Button variant="contained" size="small" onClick={() => setShowDialog(true)}>
                      View
                    </Button>
                    <Button variant="contained" size="small" color="success">
                      Edit
                    </Button>
                    <Button variant="contained" size="small" color="error">
                      Delete
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}
