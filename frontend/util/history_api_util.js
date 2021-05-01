export const fetchHistory = () => {
  return $.ajax({
    method: 'GET',
    url: `/api/vendor/history`
  })
}