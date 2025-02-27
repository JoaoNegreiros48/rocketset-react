import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react'
import { Button } from './ui/button'

export interface PaginationProps {
  pageIndex: number;
  totalCount: number;
  perPage: number;
}

export function Pagination({ pageIndex, perPage, totalCount }: PaginationProps) {
  const pages = Math.ceil(totalCount / perPage) || 1

  return (
    <div className="flex items-center justify-between">
      <span className="tex-sm text-muted-foreground">
        Total de {totalCount} registros
      </span>

      <div className="flex items-center gap-6 lg:gap-8">
        <div className="flex text-sm font-medium">
          Página {pageIndex + 1} de {pages}
        </div>

        <div className="flex items-center gap-2">
          <Button variant="outline" className="h-8 w-8 p-0">
            <ChevronsLeft />
          </Button>
          <Button variant="outline" className="h-8 w-8 p-0">
            <ChevronLeft />
          </Button>
          <Button variant="outline" className="h-8 w-8 p-0">
            <ChevronRight />
          </Button>
          <Button variant="outline" className="h-8 w-8 p-0">
            <ChevronsRight />
          </Button>
        </div>
      </div>
    </div>
  )
}
