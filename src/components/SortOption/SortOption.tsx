import React from 'react'

export default function SortOption({sortBy,setSortBy}:{sortBy:any, setSortBy:Function}) {
  return (
    <form>
        <div>Sort By:</div>
        <select value={sortBy} onChange={(event)=>{ setSortBy(event.target.value)}}>
            <option value="none">None</option>
            <option value="username">User name</option>
            <option value="fullname">Full name</option>
        </select>
    </form>
  )
}
