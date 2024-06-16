import React from 'react';
import Table from './Table';
import TableA from './TableA';
import TableB from './TableB';

const PostList = props => {
  return (
    <>
      <Table headersName={['글 번호', '제목', '등록일', '조회수']}>
        <TableA>
          <TableB>1</TableB>
          <TableB>[냥이 상담소] 고양이와 여름나기</TableB>
          <TableB>2024-06-10</TableB>
          <TableB>100</TableB>
        </TableA>
        <TableA>
          <TableB>2</TableB>
          <TableB>[소동물 상담소] 햄스터 케이지 크기는? </TableB>
          <TableB>2024-06-12</TableB>
          <TableB>125</TableB>
        </TableA>
        <TableA>
          <TableB>3</TableB>
          <TableB>[댕이 상담소] 강아지 여름 산책 시 주의해야 할 것들!</TableB>
          <TableB>2024-06-15</TableB>
          <TableB>123</TableB>
        </TableA>
        <TableA>
          <TableB>4</TableB>
          <TableB>[공지 사항] 반려동물 관련 건강검진 병원 공지..</TableB>
          <TableB>2020-06-15</TableB>
          <TableB>399</TableB>
        </TableA>
        <TableA>
          <TableB>5</TableB>
          <TableB>[이벤트] 반려동물과 함께 호캉스 떠나자! </TableB>
          <TableB>2020-06-17</TableB>
          <TableB>1207</TableB>
        </TableA>
      </Table>
    </>
  )
}

export default PostList;